import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Book() {
    const { id } = useParams();

    const [inputField, setInputField] = useState([{ id: 0, name: "", mobile: "" }]);
    const [eventData, setEventData] = useState(null);

    const fetchLoadData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/event/get/${id}`);
            console.log("Full Response:", response);
            console.log("Response Data:", response.data);

            
            if (response.data && response.data.data && response.data.data.booking) {
                setEventData(response.data.data); 
            } else {
                console.log("Data format is incorrect or booking is missing.");
            }
        } catch (error) {
            console.log("Fetch Error:", error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchLoadData();
        }
    }, [id]);

    const handleReport = async () => {
        try {
            const response = await axios.put(
                `http://localhost:8080/event/${eventData._id}`,
                { ...eventData, booking: inputField }
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeInput = (e, index) => {
        const updatedRow = inputField.map((row, idx) => {
            if (idx === index) {
                return { ...row, [e.target.name]: e.target.value };
            }
            return row;
        });
        setInputField(updatedRow);
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-2/5 border-[1px] border-black shadow-lg shadow-black rounded-lg">
                <h1 className="text-center py-10 text-2xl font-bold">New Event</h1>
                <form className="flex flex-col justify-center items-center">

                    {
                        inputField.map((item, index) => (
                            <div key={index}>
                                <div className="flex flex-col pb-8">
                                    <label className="text-md font-semibold text-gray-700">Your Name</label>
                                    <input
                                        name="name"
                                        value={item.name}
                                        onChange={(e) => onChangeInput(e, index)}
                                        className="border-[1px] border-black outline-none w-80 rounded-md px-2"
                                        type="text"
                                    />
                                </div>

                                <div className="flex flex-col pb-8">
                                    <label className="text-md font-semibold text-gray-700">Contact No.</label>
                                    <input
                                        name="mobile"
                                        value={item.mobile}
                                        onChange={(e) => onChangeInput(e, index)}
                                        className="border-[1px] border-black outline-none w-80 rounded-md px-2"
                                        type="number"
                                    />
                                </div>
                            </div>
                        ))
                    }
                    
                    <Link
                        onClick={handleReport}
                        to={'/home'}
                        className={`border-[2px] border-[#102C57] px-4 py-1 rounded-2xl m-4 cursor-pointer hover:bg-[#102C57] hover:text-white ${!eventData ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!eventData}
                    >
                        Book
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Book;
