/* eslint-disable react/no-unescaped-entities */
import { useOutletContext } from "react-router-dom";

const IdCard = () => {
    const { data } = useOutletContext();
    return (
        <div>
            <body className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-80 border-2 border-blue-500 rounded-lg p-4 bg-white shadow-md text-center">

                    <div className="bg-blue-500 text-white py-2 rounded-t-lg mb-4">
                        <p className="font-semibold">Student ID Card</p>
                    </div>


                    <img
                        src="https://via.placeholder.com/100"
                        alt="Student Photo"
                        className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 object-cover mb-4"
                    />


                    <div>
                        <h4 className="text-lg font-semibold">{data.studentNameEn}</h4>
                    </div>
                    <table className="w-full text-sm mt-3 mb-2">
                        <tbody>
                            <tr>
                                <td className="font-semibold py-1">ID:</td>
                                <td>{data.studentId}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-1">Father&apos;s Name:</td>
                                <td>{data.fatherNameEn}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-1">Mother's Name:</td>
                                <td>{data.motherNameEn}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-1">DOB:</td>
                                <td>{data.dob}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-1">Mobile:</td>
                                <td>{data.fatherMobile}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-1">Session:</td>
                                <td>{data.session}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-1">Technology:</td>
                                <td>{data.classname}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-1">Blood Group:</td>
                                <td>B+</td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="text-xs text-gray-600">
                        <p>Issued on: 01 December 2024</p>
                        <p>Valid Until: 31 December 2025</p>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default IdCard;