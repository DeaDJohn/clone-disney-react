import './Loading.css'

const Loading = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading