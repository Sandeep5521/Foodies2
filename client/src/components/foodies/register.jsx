import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import { Alert } from "@material-tailwind/react";
import root from "../../ingrediant/backend";

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
            <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default function Register({ parent }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const [obj, setObj] = useState({
        content: "",
        visible: false
    })
    let name, value;
    const handleInputs = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })
        // console.log(user);
    }
    const submit = async () => {
        if (!user.name) {
            setObj({
                content: "You can't leave name empty",
                visible: true
            })
            setTimeout(() => {
                setObj({ ...obj, visible: false })
            }, 2000)
            return;
        }
        if (!user.email) {
            setObj({
                content: "You can't leave Email empty",
                visible: true
            })
            setTimeout(() => {
                setObj({ ...obj, visible: false })
            }, 2000)
            return;
        }
        if (!isEmail(user.email)) {
            setObj({
                content: "Email is not valid",
                visible: true
            })
            setTimeout(() => {
                setObj({ ...obj, visible: false })
            }, 2000)
            return;
        }
        if (!user.password) {
            setObj({
                content: "You can't leave Password empty",
                visible: true
            })
            setTimeout(() => {
                setObj({ ...obj, visible: false })
            }, 2000);
            return;
        }
        if (!user.cpassword) {
            setObj({
                content: "You can't leave Confirm Password empty",
                visible: true
            })
            setTimeout(() => {
                setObj({ ...obj, visible: false })
            }, 2000);
            return;
        }
        if (user.password != user.cpassword) {
            setObj({
                content: "password and confirm password are not matching",
                visible: true
            })
            setTimeout(() => {
                setObj({ ...obj, visible: false })
            }, 2000);
            return;
        }
        let tmp = await fetch(`${root}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json'
            }
        })
        tmp = await tmp.json();
        console.log(tmp);
    }

    return (
        <>
            <div className="absolute top-20 w-[90%] mx-[5%] flex justify-center">
                <Alert icon={<Icon />}
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 100 },
                    }}
                    open={obj.visible} className="bg-black dark:bg-yellow-300 w-fit dark:text-black space-x-4 bg-opacity-80">{obj.content}</Alert>
            </div>
            <div className="flex justify-center items-center h-fit dark:bg-black bg-gray-200 py-10 pt-28 px-5">
                <Card className="w-96 px-7">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center bg-red-400 shadow-red-500 relative bottom-7"
                    >
                        <Typography variant="h3" color="white">
                            Sign Up
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4 -mt-7">
                        <div className="relative">
                            <input type="text" id="name" name="name" value={user.name} onChange={handleInputs} className="bg-gray-50 focus:bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5 focus:outline-none focus:border-red-500 peer" placeholder="" required />

                            <label htmlFor="name" className="cursor-text absolute peer-focus:bg-white text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>

                        </div>
                        <div className="relative">
                            <input type="text" id="email" name="email" value={user.email} onChange={handleInputs} className="bg-gray-50 focus:bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5 focus:outline-none focus:border-red-500 peer" placeholder="" required />

                            <label htmlFor="email" className="cursor-text absolute peer-focus:bg-white text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>

                        </div>
                        <div className="relative">
                            <input type="password" id="first_name" name="password" value={user.password} onChange={handleInputs} className="bg-gray-50 focus:bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5 focus:outline-none focus:border-red-500 peer" placeholder="" required />

                            <label htmlFor="first_name" className="cursor-text absolute peer-focus:bg-white text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>

                        </div>
                        <div className="relative">
                            <input type="password" id="second_name" name="cpassword" value={user.cpassword} onChange={handleInputs} className="bg-gray-50 focus:bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5 focus:outline-none focus:border-red-500 peer" placeholder="" required />

                            <label htmlFor="second_name" className="cursor-text absolute peer-focus:bg-white text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Confirm Password</label>

                        </div>
                        {/* <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 accent-red-500" required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
                    </div> */}
                    </CardBody>
                    <CardFooter className="pt-0 mt-5">
                        <Button variant="gradient" onClick={submit} className="bg-red-400 hover:shadow hover:bg-red-500" fullWidth>
                            Register
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center pb-5">
                            Already have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold text-red-400 hover:text-red-500"
                                onClick={() => parent({
                                    type: 'Login',
                                    title: 'Login'
                                })}
                            >
                                <NavLink to={'/login'}>Sign in</NavLink>
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}