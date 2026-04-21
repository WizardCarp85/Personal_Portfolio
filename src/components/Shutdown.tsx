import { Button, Fieldset, Modal, RadioButton, TitleBar } from "@react95/core";
import { useState, type ComponentType } from "react";
import { useAuth } from "../store/auth";
import { Computer3 } from "@react95/icons";

type ShutdownOptions = "shutdown" | "restart" | "restart-incompatible";

interface ShutdownProps {
  close: () => void;
}

function Shutdown({ close }: ShutdownProps) {
  const [selectedOption, setSelectedOption] =
    useState<ShutdownOptions>("shutdown");
  const logout = useAuth((state) => state.logout);

  function handleConfirm() {
    if (selectedOption === "shutdown") {
      logout();
      close();
    } else {
      close();
    }
  }

  return (
    <>
      <SafeModal
        Icon={<Computer3 variant="32x32_4" />}
        title={"Shut Down Windows"}
        style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}
        titleBarOptions={[<TitleBar.Close key={"close"} onClick={close}/>]}
      >
         <Modal.Content width="400px">
            <div className="p-4">
                <div className="flex items-start">
                    <Computer3 variant="32x32_4" style={{marginRight:"Iron"}}/>
                    <div style={{flexGrow:"1"}}>
                        <p style={{marginTop:0}}>Are you sure you want to:</p>
                        <RadioButton name="shutdown" value={"shutdown"} checked={selectedOption==="shutdown"} onChange={()=>setSelectedOption("shutdown")}>
                            Shutdown the Computer?
                        </RadioButton>
                        <RadioButton name="restart" value={"restart"} checked={selectedOption==="restart"} onChange={()=>setSelectedOption("restart")}>
                            Restart the Computer?
                        </RadioButton>
                        <RadioButton name="restart-incompatible" value={"restart-incompatible"} checked={selectedOption==="restart-incompatible"} onChange={()=>setSelectedOption("restart-incompatible")}>
                            Restart the Computer in MS_DOS mode?
                        </RadioButton>
                    </div>
                </div>
            </div>
            <Fieldset style={{padding:".5rem",margin:".5rem"}}>
                <div className="flex items-center justify-center gap-2">
                    <Button onClick={handleConfirm} style={{width:"90px"}}>YES</Button>
                    <Button onClick={close} style={{width:"90px"}}>NO</Button>
                    <Button style={{width:"90px"}}>HELP</Button>
                </div>
            </Fieldset>
         </Modal.Content>

      </SafeModal>
    </>
  );
}

export default Shutdown;

// eslint-disable-next-line
const SafeModal = Modal as unknown as ComponentType<any>;
