/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function CustomDrawer({
  button: propsButton,
  buttonText: propsButtonText,
  title: propsTitle,
  description: propsDescription,
  className: propsClassName,
  children: propsChildren,
  footer: propsFooter,
  quitButton: propsQuitButton,
  onClick: propsOnClick,
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {propsButton || <Button variant="outline">{propsButtonText}</Button>}
      </DrawerTrigger>
      <DrawerContent className={propsClassName}>
        <DrawerHeader>
          <DrawerTitle>{propsTitle}</DrawerTitle>
          {propsDescription && (
            <DrawerDescription>{propsDescription}</DrawerDescription>
          )}
        </DrawerHeader>
        {propsChildren}
        {/* Carré blanc en haut a droite pour la croix */}
        <div className="w-10 h-10 bg-primary absolute top-0 right-0 rounded">
          {" "}
        </div>
        <DrawerFooter className="flex !justify-center">
          {propsFooter || (
            <DrawerClose>
              {propsQuitButton || (
                <Button type="submit" onClick={propsOnClick}>
                  Save changes
                </Button>
              )}
            </DrawerClose>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default CustomDrawer;
