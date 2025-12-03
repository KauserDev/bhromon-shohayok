import file from "../../public/images/file.png";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 lg:mt-30 mt-15">
            <img className="w-60" src={file} alt="" />
            <h1 className="text-2xl font-semibold text-center text-red-500">No data found !</h1>
        </div>
    );
};

export default Error;