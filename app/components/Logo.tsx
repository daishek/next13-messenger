import Image from "next/image"
const Logo = () => {
  return (
    <Image
        alt="Messenger Logo"
        width={48}
        height={48}
        src="/images/logo.png"
    />
  )
}

export default Logo