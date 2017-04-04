/*jshint esversion: 6*/

var chai = require("chai");
var expect = chai.expect;
var bubblesort = require("../bubblesort");


var sortA = [35,45,5,40,50,25,10,15,20,30];
var sortB = ["3","6","9","12","15","18","21","24","27","30"];
var sortC = [26,6,8,14,20,4,10,12,2,16,18,22,24];


describe("bubblesort", function(){

  it("should be a function", function(){
    expect(bubblesort).to.be.a("function");
  });

  it("should return an array", function(){
    expect(bubblesort(sortA)).to.be.a("array");

  });

  it("should return only and array of numbers", function(){
    expect(bubblesort(sortC)).to.equal([[3,6,9,12,15,18,21,24,27,30]]);
  });

  it.skip("should return the array sorted to consecutive order (left to right)", function(){
    expect(bubblesort(sortA)).to.equal([5,10,15,20,25,30,35,40,45,50]);
    expect(bubblesort(sortB)).to.equal([3,6,9,12,15,18,21,24,17,30]);
    expect(bubblesort(sortC)).to.equal([2,4,6,8,10,12,14,16,18,20,22,24,26]);

  it.skip("should have an indicator for a pass that changes nothing", function(){
    // What test uses a boolean??

  });

  });
});