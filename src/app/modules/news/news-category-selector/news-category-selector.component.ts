import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

interface Category {
  id: number,
  name: string
}

@Component({
  selector: 'app-news-category-selector',
  templateUrl: './news-category-selector.component.html',
  styleUrls: ['./news-category-selector.component.scss']
})
export class NewsCategorySelectorComponent implements OnInit {


  @Input() category: string = "События"
  @Input() categories: Array<Category> = []
  @Output() categoryChange = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
  }

  selectCategory(name: string) {
    this.category = name
    this.categoryChange.emit(this.category)
  }

  isSelected(name: string) {
    return this.category === name


  }


}
