import { Button } from "../layout/Button.style";

const Buttons = () => {


    return (
        <div>
            <Button type='button' btnPrimary btnMd autofocus>medium button with primary color</Button>
            <Button type='submit' formmethod='post' btnSm btnSecondary>small button with secondary color</Button>
            <Button type='reset' btnPrimary btnLg value="CSS">large button with primary color</Button>
            <Button btnBlock btnSecondary btnLg name="subject">Block Button With Large Size and secondary color</Button>
        </div>
    )
}
export default Buttons;