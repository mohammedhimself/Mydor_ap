import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  
  activeTab: string = 'Options'; 
  notifyEmail: string = ''; 
  category: string = 'none'; 
  privacy: string = 'everybody'; 
  sendCopy: boolean = false; 

 
  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

 
  addEmail(): void {
    if (this.notifyEmail.trim() === '') {
      alert('Please enter a valid email.');
    } else {
      alert(`Added: ${this.notifyEmail}`);
      this.notifyEmail = ''; 
    }
  }

 
  uploadFiles(): void {
    alert('Files uploaded successfully!');
  }

  
  cancelUpload(): void {
    alert('Upload canceled.');
  }

  
  tryBasicUploader(): void {
    alert('Redirecting to the basic uploader...');
  }
}
