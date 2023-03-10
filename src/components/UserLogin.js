import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";


const UserLogin = () => {

    // User authentication here
    // Create a button that's linked to register => "Not yet a member? Register here"
    // Idea: login pop-up -> succesful login -> my profile page -> toggle the buttons

    const navigate = useNavigate();

    
    const [form] = Form.useForm();

        // const onFinish = values =>{
        //     console.log("Received values of form", values);
        // }

        const handleSubmit = (event) => {
            alert("User has been signed in");
            // event.preventDefault();
            form.resetFields();
            navigate("/login");
        }
    

    // Piece of state -> in App.js
    // User data - id
    // Check all users -> create user object without id -> based on fetch request .filter()
    // - if exists - have both piece of info( name, email address) - index of. use user/id
    return ( 
        <>
        <Form onFinish={handleSubmit}
        form={form}
        name="login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        >
            <Form.Item
            name="emailAddress"
            rules={[
                {
                    required: true,
                    message: "Please enter your email address!",
                }
            ]}>
                <Input type="text" placeholder="Email Address"/>
            </Form.Item>

            <Form.Item
            name="password"
            rules={[
                {
                    required: true,
                    message: "Please enter your password!",
                }
            ]}>
                <Input type="password" placeholder="Password"/>
            </Form.Item>
            <Form.Item>
                <Form.Item
                name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember Me</Checkbox>
                </Form.Item>

                <a className="forgot-password" href="">
                    Forget Password?
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-button">
                    Login
                </Button>
                <a href="/register">Not a member yet? Sign up now!</a>
            </Form.Item>
        </Form>
        </>
     );
}
 
export default UserLogin;

// onChange={(event) => setNewEmailAddress(event.target.value)}