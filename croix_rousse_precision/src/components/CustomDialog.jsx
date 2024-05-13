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
  titleClassName: propsTitleClassName,
  description: propsDescription,
  descriptionClassName: propsDescriptionClassName,
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
          <DialogTitle
            className={
              propsTitleClassName ||
              "font-poppins overflow-x-auto scrollsm text-[24px]"
            }
          >
            {propsTitle}
          </DialogTitle>
          {propsDescription && (
            <DialogDescription
              className={propsDescriptionClassName || "font-poppins"}
            >
              {propsDescription}
            </DialogDescription>
          )}
        </DialogHeader>
        {propsChildren}
        {/* Carré blanc en haut a droite pour la croix */}
        <div className="w-10 h-10 bg-transparent absolute top-0 right-0 rounded">
          {" "}
        </div>
        <DialogFooter className="flex !justify-center">
          {propsFooter || (
            <DialogClose>
              {propsQuitButton ? (
                <Button type="submit" onClick={propsOnClick}>
                  Save changes
                </Button>
              ) : null}
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
