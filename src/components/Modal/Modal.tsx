import { FC, ReactNode } from "react"
import "./Modal.css"

type ModalProps = {
  open: Boolean,
  icon: ReactNode,
  title: string,
  setOpen: (bool:boolean) => void,
  children: ReactNode
}

const Modal:FC<ModalProps> = ({open, setOpen, title, icon, children}) => {
  return (
    <div className="modal-backdrop"
      onClick={() => open ? setOpen(false) : () => {}}
      style={{ display: open ? "flex" : "none" }}
      >
      <div className="modal rounded-md p-[20px] w-5/6 h-fit sm:w-3/5 lg:w-2/5" onClick={(e) => e.stopPropagation()}>
        <h5 className="flex items-center text-black text-[20px] font-semibold gap-2"><span>{icon}</span>{title}</h5>
        {children}
      </div>
    </div>
  )
}

export default Modal