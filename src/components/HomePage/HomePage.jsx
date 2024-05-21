import './HomePage.scss';
import MainHeading from "../MainHeading/MainHeading";

import { useForm } from "react-hook-form"
import { useSnackbar } from "notistack";

function HomePage() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const { enqueueSnackbar } = useSnackbar();



    const onClickSubmit = (data) => {
        enqueueSnackbar(`Welcome ${data.name}`, { variant: "success", autoHideDuration: 1500, anchorOrigin: { vertical: 'top', horizontal: 'right' } });

        reset();
    }




    return (
        <div className="HomePage">

            <MainHeading />

            <div className="rules">
                <h2 className="md:text-2xl text-xl  font-bold text-center mt-10">Please read the following rules carefully.</h2>

                <ul className="list-decimal list-inside w-fit mx-auto mt-5">
                    <li className="md:text-lg text-md font-bold">For every correct answer, 4 marks are awarded.</li>
                    <li className="md:text-lg text-md font-bold">For every incorrect answer, 1 mark is deducted.</li>
                    <li className="md:text-lg text-md font-bold">There is negative marking.</li>
                    <li className="md:text-lg text-md font-bold">No marks are awarded or deducted for questions that are not attempted.</li>
                    <li className="md:text-lg text-md font-bold">50 questions are there in total.</li>
                </ul>
            </div>

            <div className="mt-10 max-w-fit md:max-w-md mx-auto">
                <form action="" onSubmit={handleSubmit(onClickSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Enter your name</span>
                        </label>
                        <input type="text" placeholder={errors.name ? "Please enter your name" : "Enter your name"} className={`input input-bordered ${errors.name ? " outline-red-200 border-red-600 placeholder:text-red-600" : ""} `} {...register("name", { required: true })} />
                    </div>

                    <div className="form-control mt-5">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default HomePage;
