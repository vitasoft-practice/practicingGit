import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StationsService } from './stations.service';
import { asyncScheduler, filter, from, generate, groupBy, interval, map, mergeMap, Observable, of, range, reduce, Subject, take } from 'rxjs';
import { handleResponse } from 'src/constants';

@Controller('stations')
export class StationsController {
    constructor(private readonly stationsService: StationsService) { }

    async fetchUsersData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        return response
    }

    @Post()
    create(@Body() station) {
        const response = this.stationsService.create(station);
        return handleResponse(response, "Created Successfully")
    }

    @Get()
    findAll() {
        //Example for observale's behaviour
        // const observable = new Observable((subscriber) => {
        //     subscriber.next(1);
        //     subscriber.next(2);
        //     subscriber.next(3);
        //     setTimeout(() => {
        //         // subscriber.error("My error")
        //         subscriber.complete();
        //         subscriber.next(4);
        //     }, 1000);
        // });

        // console.log('just before subscribe');
        // observable.subscribe({
        //     next(x) {
        //         console.log('got value ' + x);
        //     },
        //     error(err) {
        //         console.error('something wrong occurred: ' + err);
        //     },
        //     complete() {
        //         console.log('done');
        //     },
        // });
        // console.log('just after subscribe');


        //Example for from event handler
        // console.log('start');

        // const array = [10, 20, 30];
        // const result = from(array, asyncScheduler); // adding asyncScheduler makes it as asynronous as the default behaviour is syncronous

        // result.subscribe(x => console.log(x));

        // console.log('end');


        //Generator example
        // const result = generate(0, x => x < 3, x => x + 1, x => x); // generate(initialValue, condition, iterator, result selector). Its is basically like a for loop

        // result.subscribe({
        //     next: value => console.log(value),
        //     complete: () => console.log('Complete!')
        // });


        //Interval example
        // const numbers = interval(1000); // produces incremental with the given time of interval

        // const takeSixtyNumbers = numbers.pipe(take(60)); // take(60) help to take only first 60 values produced by interval

        // takeSixtyNumbers.subscribe(x => console.log('Next: ', x));
        // takeSixtyNumbers.subscribe(x => {
        //     const result = range(1, x);

        //     result.subscribe({
        //         next: value => console.log(value),
        //         complete: () => console.log('Complete!')
        //     });
        // }
        // );


        //Range example
        // const result = range(1, 5); // range(start, end). Its is basically like a for loop too

        // result.subscribe({
        //     next: value => console.log(value),
        //     complete: () => console.log('Complete!')
        // });

        //groupby example
        // const observable = of(
        //     { id: 1, name: 'JavaScript' },
        //     { id: 2, name: 'Parcel' },
        //     { id: 2, name: 'webpack' },
        //     { id: 1, name: 'TypeScript' },
        //     { id: 3, name: 'TSLint' }
        // ).pipe(
        //     groupBy(p => p.id, { element: p => p.name }),
        //     mergeMap(group$ => group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))),
        //     map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
        // )

        // observable.subscribe(p => console.log(p));


        //Subject example
        // const subject_test = new Subject();

        // subject_test.subscribe({
        //     next: (v) => console.log(v)
        // });
        // subject_test.subscribe({
        //     next: (v) => console.log(v)
        // });

        // let final_val = from(this.fetchUsersData()).pipe(map(e => e));
        // let subscriber = final_val.subscribe(subject_test);
        // subscriber.unsubscribe()

        //operators example
        let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        let case1 = test1.pipe(
            filter(x => x % 2 === 0), // filters even numbers
            reduce((acc, one) => acc + one, 0) // normal js reduce but from rxjs
        )
        case1.subscribe(x => console.log(x));

        const response = this.stationsService.findAll();
        return handleResponse(response, "Records fetched successfully")
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.stationsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatedStation) {
        this.stationsService.update(id, updatedStation);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        this.stationsService.remove(id);
    }
}
