

/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(employeeRecordsArray) {
    const employeeRecords = {
      firstName: employeeRecordsArray[0],
      familyName: employeeRecordsArray[1],
      title: employeeRecordsArray[2],
      payPerHour: employeeRecordsArray[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
    return employeeRecords;
  }
  
  function createEmployeeRecords(employeesRecords) {
    const employeesRecordsData = [];
    employeesRecords.map((employeeRecords) => {
      employeesRecordsData.push(createEmployeeRecord(employeeRecords));
    });
  
    return employeesRecordsData;
  }
  
  function createTimeInEvent(timeIn) {
    const day = timeIn.split(" ");
    const hour = parseInt(day[1]);
    const date = day[0];
  
    this.timeInEvents.push({
      type: "TimeIn",
      hour: hour,
      date: date,
    });
    return this;
  }
  function createTimeOutEvent(timeOut) {
    const day = timeOut.split(" ");
    const hour = parseInt(day[1]);
    const date = day[0];
  
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: hour,
      date: date,
    });
    return this;
  }
  function hoursWorkedOnDate(soughtDate) {
    const timeIn = this.timeInEvents.find(function (e) {
      return e.date === soughtDate;
    });
    const timeOut = this.timeOutEvents.find(function (e) {
      return e.date === soughtDate;
    });
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  function wagesEarnedOnDate(dateSought) {
    const Wage = hoursWorkedOnDate.call(this, dateSought) * this.payPerHour;
    return Wage;
  }
  
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function (rec) {
      return rec.firstName === firstName;
    });
  }
  function calculatePayroll(arrayOfEmployeeRecords) {
    return arrayOfEmployeeRecords.reduce(function (memo, rec) {
      return memo + allWagesFor.call(rec);
    }, 0);
  }
  
  
  const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date;
    });
  
    const payable = eligibleDates.reduce(
      function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
      }.bind(this),
      0
    ); // <== Hm, why did we need to add bind() there? We'll discuss soon!
  
    return payable;
    };
