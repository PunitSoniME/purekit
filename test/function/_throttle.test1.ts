// import _throttle from 'lodash/throttle';
// import _identity from 'lodash/identity';
// import { throttle } from '../../src/function';
// import identity from '../../src/util/identity';
// import assert from 'assert';

// describe('Function', () => {
// 	it('should throttle a function', function (done) {
// 		var callCount = 0,
// 			throttled = throttle(function () {
// 				callCount++;
// 			}, 32);

// 		throttled();
// 		throttled();
// 		throttled();

// 		var lastCount = callCount;
// 		assert.ok(callCount);

// 		setTimeout(function () {
// 			assert.ok(callCount > lastCount);
// 			done();
// 		}, 64);
// 	});

// 	it('subsequent calls should return the result of the first call', function (done) {
// 		var throttled = throttle(identity, 32),
// 			results = [throttled('a'), throttled('b')];

// 		assert.deepStrictEqual(results, ['a', 'a']);

// 		setTimeout(function () {
// 			var results = [throttled('c'), throttled('d')];
// 			assert.notStrictEqual(results[0], 'a');
// 			assert.notStrictEqual(results[0], undefined);

// 			assert.notStrictEqual(results[1], 'd');
// 			assert.notStrictEqual(results[1], undefined);
// 			done();
// 		}, 64);
// 	});

// 	it('should not trigger a trailing call when invoked once', function (done) {
// 		var callCount = 0,
// 			throttled = throttle(function () {
// 				callCount++;
// 			}, 32);

// 		throttled();
// 		assert.strictEqual(callCount, 1);

// 		setTimeout(function () {
// 			assert.strictEqual(callCount, 1);
// 			done();
// 		}, 64);
// 	});

// 	it('should trigger a second throttled call as soon as possible', function (done) {
// 		var callCount = 0;

// 		var throttled = throttle(
// 			function () {
// 				callCount++;
// 			},
// 			128,
// 			{ leading: false }
// 		);

// 		throttled();

// 		setTimeout(function () {
// 			assert.strictEqual(callCount, 1);
// 			throttled();
// 		}, 192);

// 		setTimeout(function () {
// 			assert.strictEqual(callCount, 1);
// 		}, 254);

// 		setTimeout(function () {
// 			assert.strictEqual(callCount, 2);
// 			done();
// 		}, 384);
// 	});

// 	it('should apply default options', function (done) {
// 		var callCount = 0,
// 			throttled = throttle(
// 				function () {
// 					callCount++;
// 				},
// 				32,
// 				{}
// 			);

// 		throttled();
// 		throttled();
// 		assert.strictEqual(callCount, 1);

// 		setTimeout(function () {
// 			assert.strictEqual(callCount, 2);
// 			done();
// 		}, 128);
// 	});

// 	it('should support a `leading` option', function () {
// 		var withLeading = throttle(identity, 32, { leading: true });
// 		assert.strictEqual(withLeading('a'), 'a');

// 		var withoutLeading = throttle(identity, 32, { leading: false });
// 		assert.strictEqual(withoutLeading('a'), undefined);
// 	});

// 	it('should support a `trailing` option', function (done) {
// 		var withCount = 0,
// 			withoutCount = 0;

// 		var withTrailing = throttle(
// 			function (value) {
// 				withCount++;
// 				return value;
// 			},
// 			64,
// 			{ trailing: true }
// 		);

// 		var withoutTrailing = throttle(
// 			function (value) {
// 				withoutCount++;
// 				return value;
// 			},
// 			64,
// 			{ trailing: false }
// 		);

// 		assert.strictEqual(withTrailing('a'), 'a');
// 		assert.strictEqual(withTrailing('b'), 'a');

// 		assert.strictEqual(withoutTrailing('a'), 'a');
// 		assert.strictEqual(withoutTrailing('b'), 'a');

// 		setTimeout(function () {
// 			assert.strictEqual(withCount, 2);
// 			assert.strictEqual(withoutCount, 1);
// 			done();
// 		}, 256);
// 	});

// 	it('should not update `lastCalled`, at the end of the timeout, when `trailing` is `false`', function (done) {
// 		var callCount = 0;

// 		var throttled = throttle(
// 			function () {
// 				callCount++;
// 			},
// 			64,
// 			{ trailing: false }
// 		);

// 		throttled();
// 		throttled();

// 		setTimeout(function () {
// 			throttled();
// 			throttled();
// 		}, 96);

// 		setTimeout(function () {
// 			assert.ok(callCount > 1);
// 			done();
// 		}, 192);
// 	});

// 	// describe('throttle', () => {

// 	//     let throttled = throttle(identity, 32),
// 	//         results = [throttled('a'), throttled('a')];

// 	//     // let _throttled = _throttle(_identity, 32),
// 	//     //     //	@ts-ignore
// 	//     //     _results = [_throttled('a'), _throttled('b')];

// 	//     it("throttle(identity, 32)", () => {
// 	//         expect(results).toEqual(['a', 'a']);	//	['a', 'a']
// 	//     });

// 	//     // it("throttle - setTimeout", (done) => {
// 	//     //     setTimeout(function () {
// 	//     //         let results = [throttled('c'), throttled('d')];
// 	//     //         //	@ts-ignore
// 	//     //         let _results = [_throttled('c'), _throttled('d')];

// 	//     //         expect(results[0]).not.toEqual('a');
// 	//     //         expect(results[1]).not.toEqual(undefined);

// 	//     //         expect(_results[0]).not.toEqual('d');
// 	//     //         expect(_results[1]).not.toEqual(undefined);

// 	//     //         expect(results[0]).toEqual(_results[0]);	//	'a'
// 	//     //         expect(results[0]).toEqual(_results[0]);	//	'a'

// 	//     //         expect(results[1]).not.toEqual('d');
// 	//     //         expect(_results[1]).not.toEqual('d');

// 	//     //         expect(results[1]).not.toEqual(undefined);
// 	//     //         expect(_results[1]).not.toEqual(undefined);

// 	//     //         expect(results[1]).toEqual(_results[1]);	//	'd'
// 	//     //         expect(results[1]).toEqual(_results[1]);	//	'd'

// 	//     //         done();
// 	//     //     }, 64);
// 	//     // });

// 	// });
// });
