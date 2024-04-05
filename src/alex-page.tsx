import {Button} from "@/components/ui/button.tsx";


interface Props {
    buttonText: string;
}

export const AlexPage = ({buttonText}:Props) => {

    return (

        <>
            <Button>
                {buttonText}
            </Button>

        </>
    )


}