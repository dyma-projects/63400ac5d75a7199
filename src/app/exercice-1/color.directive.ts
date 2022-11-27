import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  @HostListener("window:keydown", ["$event"])
  private surligne(e: KeyboardEvent) {
    if (e.key === "ArrowUp") {
      this.el.nativeElement.style.color = "red";
    } else if (e.key === "ArrowDown") {
      this.el.nativeElement.style.color = "green";
    } else if (e.key === "ArrowRight") {
      this.el.nativeElement.style.color = "yellow";
    } else {
      this.el.nativeElement.style.color = "blue";
    }
  }
  constructor(private el: ElementRef<HTMLParagraphElement>) {}
}
