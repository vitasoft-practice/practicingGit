type StoreItemProps = {
    id: number 
    ImgUrl: string 
    name: string 
    caption: string
}
export function StoreItem({ id, ImgUrl, name, caption }: StoreItemProps) {
    return (
        <div className="design__card">
            <img src={ImgUrl} />
            <h2>{name}</h2>
            <p>{caption}</p>
        </div>
    )
}