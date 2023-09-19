export default function TextInput(
    {
        label
    }:
    {
        label: string
    }
): React.ReactNode {
    return(
        <>
            <label className="label">
                <span>{label}</span>
            </label>
            <input type="text" className="input w-full input-bordered"/>
        </>
    )
}