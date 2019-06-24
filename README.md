## Hotel Front End

Angular 8 component to check in new guests and also show a data table with users registered 
at the hotel.

### Reactive
This component is reactive, the table is refreshing itself at every new checkin without
page reload, working with Angular EventEmitters at BroadcasterService.

### To Do

- Datepicker at date inputs
- Input Masks
- Loader Component as in https://www.mattosinvestimentos.com/

#### Still Missing
Checked in person and guests that already leaved, still thinking if I am going to write
this filter as two new endpoints at the back end of the application or a simple pipe filter
at the front end.


#### Doubts
rmkoszalka@gmail.com
