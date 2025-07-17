import styles from "./index.module.scss"
import logo from "@/assets/logo.png"
import cornerMark from "@/assets/cornerMark.png"
import download from "@/assets/download.png"
import hand from "@/assets/hand.png"

function Home() {

  return (
    <div className={styles.page}>
      <div className={styles.head}>
          <div className={styles.logoContent}>
              <img src={logo} alt={"minex"} className={styles.logo}/>
              <div className={styles.title}>MineX</div>
          </div>
          <div className={styles.navigationBar}>
              <div className={styles.bar} onClick={()=>{
                  window.open("https://sites.google.com/view/minex-x-privacy-policy", "_blank");
              }}>Privacy Policy</div>
              <div className={styles.bar} onClick={()=>{
                  window.open("https://sites.google.com/view/minex-terms-of-service", "_blank");
              }}>Terms of Service</div>
              <div className={styles.bar}>Support</div>
          </div>
      </div>
      <div className={styles.content}>
          <div className={styles.introduce}>
              Remote Computing
              Power: Manage with Ease
              <img src={cornerMark} alt={"cornerMark"} className={styles.cornerMark}/>
          </div>
          <div className={styles.tips}>
              Earn Bitcoin effortlessly with MineX—a cloud-based mining tool for remote Miner management. Get free or paid Miners, sit back, and let them work for you 24/7. Withdraw your BTC earnings straight to your wallet with ease!
          </div>
          <div className={styles.downloadContent}>
              <img src={download} alt={"download"} className={styles.download}/>
          </div>

      </div>
        <div className={styles.handContent}>
            <img src={hand} alt={"hand"} className={styles.hand}/>
        </div>
    </div>
  )
}

export default Home
