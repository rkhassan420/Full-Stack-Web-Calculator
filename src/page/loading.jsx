import loading from '../assets/loading.gif';

const Loading = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <img
                style={{ height: "90px", backgroundColor:"none" }}
                src={loading}
                alt="Loading...."
            />
        </div>
    );
};

export default Loading;
