import { useRouter } from "next/router"

export default function about () {
    const router = useRouter()
    function toBack () {
        router.back()
    }
    return (
        <>
            <h1> about file</h1>
            <button onClick={toBack}>to back</button>
        </>
    )
}