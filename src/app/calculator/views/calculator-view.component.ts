
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from "../components/calculator/calculator.component";

@Component({
  selector: 'calculator-view',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './calculator-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalculatorViewComponent { }
