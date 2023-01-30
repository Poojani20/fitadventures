//first test case

it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  //second test case

  it(`should have as title 'fullstackproject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fullstackproject');
  });
  //third test case

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(compiled.querySelector('.content span')?.textContent).toContain('fullstackproject app is running!');
  });

  //test case for header component
  describe('HeaderComponent', () => {
    let component; HeaderComponent;
    let fixture; ComponentFixture<HeaderComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ HeaderComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
//test case for footer component
describe('FooterComponent', () => {
    let component; FooterComponent;
    let fixture; ComponentFixture<FooterComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ FooterComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(FooterComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
  
  //test case for register component
  describe('RegisterComponent', () => {
    let component; RegisterComponent;
    let fixture; ComponentFixture<RegisterComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ RegisterComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(RegisterComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  //test case for login component
  describe('LoginComponent', () => {
    let component; LoginComponent;
    let fixture; ComponentFixture<LoginComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ LoginComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
  //test case for welcome page
  describe('WelcomeComponent', () => {
    let component; WelcomeComponent;
    let fixture; ComponentFixture<WelcomeComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ WelcomeComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(WelcomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  //test case for dietplan page
  describe('DietplanComponent', () => {
    let component; DietplanComponent;
    let fixture; ComponentFixture<DietplanComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ DietplanComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(DietplanComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  //test case for workout plan
  describe('WorkoutComponent', () => {
    let component; WorkoutComponent;
    let fixture; ComponentFixture<WorkoutComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ WorkoutComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(WorkoutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  //test case for task 
  describe('TaskComponent', () => {
    let component; TaskComponent;
    let fixture; ComponentFixture<TaskComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ TaskComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(TaskComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  //test case for bmi 
  describe('BmiComponent', () => {
    let component; BmiComponent;
    let fixture; ComponentFixture<BmiComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BmiComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(BmiComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create the app', () => {
      const fixture = TestBed.createComponent(BmiComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });
  
    it(`should have as title 'BMIWebApp'`, () => {
      const fixture = TestBed.createComponent(BmiComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('BMIWebApp');
    });
  
    it('should render title', () => {
      const fixture = TestBed.createComponent(BmiComponent);
      fixture.detectChanges();
      
      expect(compiled.querySelector('.content span')?.textContent).toContain('BMIWebApp app is running!');
    });
  });

  //test case for chat
  describe('ChatComponent', () => {
    let component; ChatComponent;
    let fixture; ComponentFixture<ChatComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ChatComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(ChatComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  //test case for about
  describe('AboutComponent', () => {
    let component; AboutComponent;
    let fixture; ComponentFixture<AboutComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ AboutComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(AboutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
  //test case for contact
  describe('ContactComponent', () => {
    let component; ContactComponent;
    let fixture; ComponentFixture<ContactComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ContactComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  //test case for profile
  describe('ProfileComponent', () => {
    let component; ProfileComponent;
    let fixture; ComponentFixture<ProfileComponent>
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ProfileComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(ProfileComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  