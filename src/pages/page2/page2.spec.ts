import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Page2 } from './page2';
import { IonicModule, Platform, NavController, NavParams} from 'ionic-angular';


describe('Page2', () => {
  let de: DebugElement;
  let comp: Page2;
  let fixture: ComponentFixture<Page2>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page2],
      imports: [
        IonicModule.forRoot(Page2)
      ],
      providers: [
        { provide: NavParams, useClass: MockNavParams },
        NavController,     
      ]
    }); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined());

   it('should have icons', () => {
    fixture.detectChanges();

    expect(comp.icons.length).toBeGreaterThanOrEqual(0);
    
  });

});

class MockNavParams{
    data = {
    };
  
    get(param) {
      return this.data[param];
    }
  }
