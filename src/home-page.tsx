import {Button} from "@/components/ui/button.tsx";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";

interface Props {
    buttonText: string;
}

export const HomePage = ({buttonText}: Props) => {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <Button className={"items-center m-20 hover:scale-150 bg-amber-400 "}>
                        {buttonText}
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <Label>
                        Enter Password
                    </Label>
                    <Input
                        placeholder={"Password"}
                        type={"text"}>
                    </Input>
                    <Button onClick={() => console.log("Button Clicked")}>
                        Submit
                    </Button>
                </DialogContent>

            </Dialog>
        </>
    )
}