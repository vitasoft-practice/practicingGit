import { getServerSideProps } from "../../pages/index";

const Image = "https://images.dog.ceo/breeds/puggle/IMG_081858.jpg";

describe("getServerSideProps", () => {
  window.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          status: "success",
          message: Image
        })
    })
  );

  it("should call dog api", async () => {
    const response = await getServerSideProps();
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          initialDog: {
            status: "success",
            message: Image
          }
        }
      })
    );
  });
});