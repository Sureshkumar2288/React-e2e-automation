import { browser, by, element } from '@syncfusion/ej2-base/e2e/index';
/* tslint:disable-next-line:no-var-requires */
const path = require('path');
const absoluteDocPathS = path.win32.normalize('E:////e2e-images\\\\/\\/\\/Study.docx');
const absoluteImagePath = path.win32.normalize('E:////e2e-images\\\\/\\/\\/Life.jpg');

describe('EJ2 Uploader React testing', () => {
  browser.get('localhost:3000');
  beforeEach(() => {
    //
  });
  it('Uploader feature matrix runnable', () => {
    browser.compareScreen(element(by.id('root')), 'react_upload_sample_rendered');
  });
});
describe('Default rendering', () => {
  browser.get('localhost:3000');
  beforeEach(() => {
    //
  });
  it('default rendering', () => {
    element.all(by.tagName('a')).get(0).click();
    browser.sleep(500);
    browser.compareScreen(element(by.className('control-pane')), 'react_upload_default_render');
  });
  it('select files', () => {
    element(by.className('e-uploader')).sendKeys(absoluteDocPathS);
    browser.sleep(1500);
    browser.compareScreen(element(by.className('control-pane')), 'default_render_file_select');
  });
  it('upload files', () => {
    element(by.className('e-file-upload-btn')).click();
    browser.sleep(2500);
    browser.compareScreen(element(by.className('control-pane')), 'default_render_file_upload');
  });
  it('remove files', () => {
    element(by.className('e-file-clear-btn')).click();
    browser.sleep(1000);
    browser.compareScreen(element(by.className('control-pane')), 'default_render_file_remove');
  });
  it('again select files', () => {
    element(by.className('e-uploader')).sendKeys(absoluteImagePath);
    browser.sleep(500);
    browser.compareScreen(element(by.className('control-pane')), 'default_render_again_file_select');
  });
  it('files uploaded', () => {
    element(by.className('e-file-upload-btn')).click();
    browser.sleep(1500);
    browser.compareScreen(element(by.className('control-pane')), 'default_render_again_file_upload');
  });
  it('remove files by remove icon', () => {
    element(by.className('e-file-delete-btn')).click();
    browser.sleep(1000);
    browser.compareScreen(element(by.className('control-pane')), 'default_render_again_file_removed');
  });
});
describe('Dynamic rendering', () => {
  browser.get('localhost:3000');
  beforeEach(() => {
    //
  });
  it('Sample rendered', () => {
    element.all(by.tagName('a')).get(1).click();
    browser.sleep(500);
    browser.compareScreen(element(by.className('control-pane')), 'react_upload_dynamic_render');
  });
  it('select files', () => {
    element(by.className('e-uploader')).sendKeys(absoluteDocPathS);
    browser.sleep(500);
    browser.compareScreen(element(by.className('control-pane')), 'dynamic_render_file_select');
  });
  it('upload files', () => {
    element(by.className('e-file-upload-btn')).click();
    browser.sleep(1500);
    browser.compareScreen(element(by.className('control-pane')), 'dynamic_render_file_upload');
  });
  it('remove files', () => {
    element(by.className('e-file-clear-btn')).click();
    browser.sleep(1000);
    browser.compareScreen(element(by.className('control-pane')), 'dynamic_render_file_remove');
  });
  it('again select files', () => {
    element(by.className('e-uploader')).sendKeys(absoluteImagePath);
    browser.sleep(500);
    browser.compareScreen(element(by.className('control-pane')), 'dynamic_render_again_file_select');
  });
  it('files uploaded', () => {
    element(by.className('e-file-upload-btn')).click();
    browser.sleep(1500);
    browser.compareScreen(element(by.className('control-pane')), 'dynamic_render_again_file_upload');
  });
  it('remove files by remove icon', () => {
    element(by.className('e-file-delete-btn')).click();
    browser.sleep(1000);
    browser.compareScreen(element(by.className('control-pane')), 'dynamic_render_again_file_removed');
  });
});
describe('OnDemand rendering', () => {
  browser.get('localhost:3000');
  beforeEach(() => {
    //
  });
  it('Sample rendered', () => {
    element.all(by.tagName('a')).get(2).click();
    browser.sleep(500);
    browser.compareScreen(element(by.className('control-pane')), 'react_upload_ondemand_render');
  });
  it('select files', () => {
    element(by.className('e-uploader')).sendKeys(absoluteDocPathS);
    browser.sleep(1500);
    browser.compareScreen(element(by.className('control-pane')), 'ondemand_render_file_upload');
  });
  it('remove files by remove icon', () => {
    element(by.className('e-file-delete-btn')).click();
    browser.sleep(1000);
    browser.compareScreen(element(by.className('control-pane')), 'ondemand_render_file_removed');
  });
});
describe('Template rendering', () => {
  browser.get('localhost:3000');
  beforeEach(() => {
    //
  });
  it('Sample rendered', () => {
    element.all(by.tagName('a')).get(3).click();
    browser.sleep(500);
    browser.compareScreen(element(by.className('control-pane')), 'react_upload_template_render');
  });
  it('select files', () => {
    element(by.id('UploadFiles')).sendKeys(absoluteImagePath);
    browser.sleep(1000);
    browser.compareScreen(element(by.className('control-pane')), 'template_render_file_select');
  });
  it('upload files', () => {
    element(by.className('e-file-upload-btn')).click();
    browser.sleep(2500);
    browser.compareScreen(element(by.className('control-pane')), 'template_render_file_upload');
  });
  it('remove files', () => {
    element(by.className('e-file-clear-btn')).click();
    browser.sleep(1000);
    browser.compareScreen(element(by.className('control-pane')), 'template_render_file_remove');
  });
  it('again select files', () => {
    element(by.className('e-uploader')).sendKeys(absoluteImagePath);
    browser.sleep(500);
    browser.compareScreen(element(by.className('control-pane')), 'template_render_again_file_select');
  });
  it('files uploaded', () => {
    element(by.className('e-file-upload-btn')).click();
    browser.sleep(2500);
    browser.compareScreen(element(by.className('control-pane')), 'template_render_again_file_upload');
  });
  it('remove files by remove icon', () => {
    element(by.className('e-file-delete-btn')).click();
    browser.sleep(1000);
    browser.compareScreen(element(by.className('control-pane')), 'template_render_again_file_removed');
  });
});
