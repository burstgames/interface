import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import classNames from "classnames";

import {
  HEADER_BURST_PAD,
  HEADER_GAMES,
  HEADER_MENU_ITEMS_MOBILE,
} from "../datas/data";
import { ChevronDown, Logo, SearchIcon } from "./Icons";
import SearchModal from "../modals/searchModal";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  const handleSearchModalOpen = () => {
    setSearchModalOpen(true);
  };
  const handleSearchModalClose = () => {
    setSearchModalOpen(false);
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const icons = {
    logo: <Logo />,
    chevron: (
      <ChevronDown
        fill="currentColor"
        size={16}
        height={undefined}
        width={undefined}
      />
    ),
  };

  return (
    <>
      <SearchModal isOpen={searchModalOpen} onClose={handleSearchModalClose} />
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        position="sticky"
        className="bg-dark sm:px-0 md:px-[8.4%] py-4">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:flex md:hidden text-white"
          />
          <NavbarBrand>
            <Link
              size="lg"
              href="/"
              className="bg-transparent sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[290px] px-0">
              <Image
                radius="none"
                width={50}
                className="sm:flex md:hidden"
                src="/logos/just-logo.svg"
                alt="logo"
              />
              <Image
                radius="none"
                width={250}
                className="sm:hidden md:flex"
                src="/logos/name-logo.svg"
                alt="logo"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="sm:hidden md:flex">
            <Dropdown className="bg-dark-gray text-white">
              <DropdownTrigger>
                <Button
                  radius="sm"
                  endContent={icons.chevron}
                  className="bg-transparent text-white font-poppins-medium text-lg">
                  Games
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                disallowEmptySelection
                selectionMode="single">
                {HEADER_GAMES.map((item: any, index: number) => (
                  <DropdownItem
                    key={"games_menu_" + index.toString()}
                    color="secondary"
                    onPress={() => router.push(item.link)}
                    className={classNames(
                      router.asPath === item.link
                        ? "text-[#a664fe]"
                        : "text-white/75"
                    )}>
                    {item.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem className="sm:hidden md:flex">
            <Dropdown className="bg-dark-gray text-white">
              <DropdownTrigger>
                <Button
                  radius="sm"
                  endContent={icons.chevron}
                  className="bg-transparent text-white font-poppins-medium   text-lg">
                  Burst Pad
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                disallowEmptySelection
                selectionMode="single">
                {HEADER_BURST_PAD.map((item: any, index: number) => (
                  <DropdownItem
                    key={"burst_pad_menu_" + index.toString()}
                    color="secondary"
                    onPress={() => router.push(item.link)}
                    className={classNames(
                      router.asPath === item.link
                        ? "text-[#a664fe]"
                        : "text-white/75"
                    )}>
                    {item.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Button
              onPress={() => handleSearchModalOpen()}
              startContent={
                <SearchIcon
                  width={undefined}
                  height={undefined}
                  fill={"#ffffff"}
                />
              }
              isIconOnly
              className="bg-transparent"></Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-dark pt-12">
          <NavbarMenuItem className="flex flex-col gap-2">
            {HEADER_MENU_ITEMS_MOBILE.map((item, index) => (
              <Accordion
                key={"accordion" + index.toString()}
                variant="light"
                itemClasses={{
                  base: "w-full",
                  heading:
                    " data-[open=true]:bg-dark-light bg-dark-gray px-4 rounded",
                  indicator: " text-white data-[open=true]:text-white",
                  content: "px-3 rounded mt-2 bg-dark-light",
                  trigger: "mt-2",
                  title: " text-white text-sm data-[open=true]:text-white",
                }}>
                <AccordionItem
                  key={index.toString()}
                  aria-label={"accordion" + index.toString()}
                  title={item.title}>
                  {HEADER_MENU_ITEMS_MOBILE[index].child.map(
                    (childItem, childIndex) => (
                      <div key={"childkey" + childIndex.toString()}>
                        <Button
                          as={Link}
                          key={"childkey" + childIndex.toString()}
                          href={childItem.link}
                          className={classNames(
                            "py-3 w-full flex items-center justify-start bg-transparent",
                            router.asPath === childItem.link
                              ? "text-[#A566FD]"
                              : "text-white"
                          )}>
                          {childItem.name}
                        </Button>
                      </div>
                    )
                  )}
                </AccordionItem>
              </Accordion>
            ))}
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Header;
