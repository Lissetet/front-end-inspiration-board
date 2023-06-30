import { useState } from "react";

const CreateBoardForm = () => {
    const [formData, setFormdData] = useState({});

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder='title'>
                </input>


            </form>
        </div>
    )

};

export default CreateBoardForm;