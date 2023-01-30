// import _throttle from 'lodash/throttle';
// import _identity from 'lodash/identity';
// import { throttle } from '../../src/function';
// import { identity } from '../../src/util';


// describe('Function', () => {
// 	describe('throttle', () => {

// 		it("throttle(identity, 32)", () => {

// 			let throttled = throttle(identity, 32);
// 			let results = [throttled('a'), throttled('b')];

// 			let _throttled = _throttle(_identity, 32);
// 			//	@ts-ignore
// 			let _results = [_throttled('a'), _throttled('b')];

// 			expect(results).toEqual(_results);	//	['a', 'a']
// 		});

// 		// it("throttle - setTimeout", (done) => {
// 		// 	setTimeout(function () {
// 		// 		let results = [throttled('c'), throttled('d')];
// 		// 		//	@ts-ignore
// 		// 		let _results = [_throttled('c'), _throttled('d')];

// 		// 		expect(results[0]).not.toEqual('a');
// 		// 		expect(_results[0]).not.toEqual('a');

// 		// 		expect(results[0]).not.toEqual(undefined);
// 		// 		expect(_results[0]).not.toEqual(undefined);

// 		// 		expect(results[0]).toEqual(_results[0]);	//	'a'
// 		// 		expect(results[0]).toEqual(_results[0]);	//	'a'


// 		// 		expect(results[1]).not.toEqual('d');
// 		// 		expect(_results[1]).not.toEqual('d');

// 		// 		expect(results[1]).not.toEqual(undefined);
// 		// 		expect(_results[1]).not.toEqual(undefined);

// 		// 		expect(results[1]).toEqual(_results[1]);	//	'd'
// 		// 		expect(results[1]).toEqual(_results[1]);	//	'd'

// 		// 		done();
// 		// 	}, 64);
// 		// });

// 	});
// });
