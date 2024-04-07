import Image from "next/image"
export default function AboutUs() {
    return (
        <>
            <h1>This is about us page.</h1>
            <Image 
                src='/images/qasim.jpeg'
                alt="This is image"
                width={200}
                height={200}
            />
        </>
    )
}