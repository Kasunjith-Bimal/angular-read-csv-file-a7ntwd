import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public userArray: User[] = [];
  public userArray1: User[] = [];
  constructor(private http: HttpClient) {
    // this.http.get('assets/csv.csv', { responseType: 'text' }).subscribe(
    //   (data) => {
    //     console.log(data);
    //     let csvToRowArray = data.split('\n');
    //     for (let index = 1; index < csvToRowArray.length - 1; index++) {
    //       let row = csvToRowArray[index].split(',');
    //       this.userArray.push(
    //         new User(parseInt(row[0], 10), row[1], row[2].trim())
    //       );
    //     }
    //     console.log(this.userArray);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  handleFileInput(files: FileList) {
    const file = files.item(0);
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const csvText = reader.result;
      console.log('csv', csvText);
      let csvToRowArray1 = csvText.toString().split('\n');
      console.log(csvToRowArray1);
      for (let index = 1; index < csvToRowArray1.length - 1; index++) {
        let row = csvToRowArray1[index].split(',');
        this.userArray1.push(new User(row[0], row[1], row[2].trim()));
      }
    };
  }
}

export class User {
  name: String;
  email: String;
  mobile: String;
  constructor(name: String, email: String, mobile: string) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
  }
}
