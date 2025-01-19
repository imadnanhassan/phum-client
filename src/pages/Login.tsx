import { Button, Row } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice.";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";

export default function Login() {
 
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
  const defaultValues = {
    userId: "0001",
    password: "admin12345",
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Login success", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
      console.log(user);
    } catch (error) {
      toast.error("Login failed", { id: toastId, duration: 2000 });
      console.error(error);
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID:" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
}
