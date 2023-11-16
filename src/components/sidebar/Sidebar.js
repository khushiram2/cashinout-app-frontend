import React, { useState } from 'react'
import "./Sidebar.css"
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
    const navigate=useNavigate()
    const [open, setopen] = useState(false)
    return (
        <div className='sidebar-container'>
            <div className='list-container' >
                <ul className='list'>
                    <li className='list-items'>
                        <div>
                            today's total
                        </div>
                    </li>
                    <li className='list-items'>
                        <div onClick={()=>setopen(!open)} >
                         {open?<IoIosArrowDown/>:<IoIosArrowUp/>}&nbsp;   history
                        </div>
                        <div className={open===true ? "block" : "hidden"}>
                            <ul className='sub-list' >
                                <li className='sub-list-items'><div>
                                pastyear
                                    </div></li>
                            </ul>
                        </div>
                    </li>
                    <li className='list-items'>
                        <div>
                            non khata credits
                        </div>
                    </li>
                    <li onClick={()=>navigate("/allkhata")} className='list-items'>
                        <div>
                            All khata
                        </div>
                    </li>
                    <li onClick={()=>navigate("/newkhata")} className='list-items'>
                        <div>
                            add new khata
                        </div>
                    </li>
                    <li className='list-items'>
                        <div>
                           new entry
                        </div>
                    </li>

                </ul>

            </div>

        </div>
    )
}
