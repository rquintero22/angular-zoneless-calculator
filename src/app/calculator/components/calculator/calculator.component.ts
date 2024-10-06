import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [
    CommonModule,
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  }
})
export class CalculatorComponent {

  private calculatorSrv = inject(CalculatorService);
  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  public resultText = computed(() => this.calculatorSrv.resultText());
  public subResultText = computed(() => this.calculatorSrv.subResultText());
  public lastOperator = computed(() => this.calculatorSrv.lastOperator());

  handleClick(key: string) {
    this.calculatorSrv.constructNumber(key);
  }

  // @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      X: '*',
      '/' : '÷',
      '%': '%',
      Enter: '='
    };

    const key = event.key;
    const keyValue = keyEquivalents[key] ?? key;

    this.handleClick(keyValue);

    this.calculatorButtons().forEach(button => {
      button.keyboardPressedStyle(keyValue);
    });
  }

}
