import {Button} from "antd";
import styles from "./index.module.scss"
import {addToNumber} from "@/redux/actions/home.ts";
import useDispatchAction from "@/hooks/useDispatchAction.ts";
import {useSelector} from "react-redux";

function Home() {

  const countNum = useSelector((state: any) => state.home.counter.count)

  const dispatch = useDispatchAction({ addToNumber })

  return (
    <div className={styles.page}><Button onClick={() => {
      dispatch.addToNumber(1)
    }} type={"primary"}> 2344 </Button>{countNum}</div>
  )
}

export default Home
