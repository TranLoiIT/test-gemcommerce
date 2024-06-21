import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/auth/authSeletor";

const useAuth = () => {
    const router = useRouter();
    const user = useSelector(selectUser);
    const [checkSuccess, setCheckSuccess] = useState(!!user?.name);
    // console.log('user', user)

    useEffect(() => {
        // logout + back to login page if not have token
        if (!user?.name) {
            router.push('/admin/login');
        } else {
            setCheckSuccess(true);
        }
      }, [user]);

    return { user };
}
 
export default useAuth;