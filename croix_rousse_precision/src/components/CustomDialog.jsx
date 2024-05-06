/* eslint-disable react/prop-types */
import React from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function CustomDialog({
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
    <Dialog>
      <DialogTrigger asChild>
        {propsButton || <Button variant="outline">{propsButtonText}</Button>}
      </DialogTrigger>
      <DialogContent className={propsClassName}>
        <DialogHeader>
          <DialogTitle>{propsTitle}</DialogTitle>
          {propsDescription && (
            <DialogDescription>{propsDescription}</DialogDescription>
          )}
        </DialogHeader>
        {propsChildren}
        {/* Carré blanc en haut a droite pour la croix */}
        <div className="w-10 h-10 bg-primary absolute top-0 right-0 rounded">
          {" "}
        </div>
        <DialogFooter className="flex !justify-center">
          {propsFooter || (
            <DialogClose>
              {propsQuitButton || (
                <Button type="submit" onClick={propsOnClick}>
                  Save changes
                </Button>
              )}
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
