import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../store/auth";
import { useRouter } from "next/router";
import { selectUser } from "../store/auth/authSeletor";

const Home = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    console.log('user', user)

    const add = () => {
        dispatch(addUser({name: 'loi', age: 22}))
    };

    const update = () => {
        dispatch(updateUser({name: 'loi2', age: 23}))
    };

    const remove = () => {
        dispatch(deleteUser({}))
    };

    return (
        <div className="p-12 gap-12 grid">
            <div>hello world</div>
            <div>
                <span className="cursor-pointer" style={{color: 'red'}} onClick={add}>Add user to store</span>
            </div>
            <div>
                <span className="cursor-pointer" style={{color: 'red'}} onClick={update}>Update user to store</span>
            </div>
            <div>
                <span className="cursor-pointer" style={{color: 'red'}} onClick={remove}>Remove user to store</span>
            </div>
            <div>
                <span className="cursor-pointer" style={{color: 'red'}} onClick={() => router.push('/admin')}>admin page</span>
            </div>
        </div>
    );
}
 
export default Home;