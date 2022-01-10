import React, { useState } from "react";
import { IconContext } from "react-icons";
import {
    Container,
    Wrapper,
    Menu,
    MenuItem,
    MenuItemLink,
    MobileIcon,
} from "./Navbar.elements";
import { FaAlignRight, FaAngleRight, FaDownload, FaTimes } from "react-icons/fa";
const Navbar = () => {

    const [ShowMenu, SetShowMenu] = useState(false)



    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "1.5em", margin: ".5em" } }}>


                    <MobileIcon onClick={() => SetShowMenu(!ShowMenu)}>
                        {
                            ShowMenu ? <FaTimes /> : <FaAlignRight />
                        }

                    </MobileIcon>

                    <Menu open={ShowMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={() => SetShowMenu(!ShowMenu)}>
                                <div>
                                    <FaAngleRight />
                                    About
                                </div>

                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>

                            <MenuItemLink onClick={() => SetShowMenu(!ShowMenu)}>
                                <div>
                                    <FaAngleRight />
                                    Experience
                                </div>

                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => SetShowMenu(!ShowMenu)}>
                                <div>
                                    <FaAngleRight />
                                    Work
                                </div>

                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => SetShowMenu(!ShowMenu)}>
                                <div>
                                    <FaAngleRight />
                                    Contact
                                </div>

                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => SetShowMenu(!ShowMenu)}>
                                <div>
                                    <FaDownload />
                                    <button>Resume</button>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
