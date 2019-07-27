"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refresh = refresh;

var _testHelpers = require("@ember/test-helpers");

async function refresh(mocking = () => undefined) {
  const url = (0, _testHelpers.currentURL)();
  const ctx = (0, _testHelpers.getContext)();
  await (0, _testHelpers.teardownContext)(ctx);
  await (0, _testHelpers.setupContext)(ctx);
  await mocking();
  await (0, _testHelpers.visit)(url);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3JlZnJlc2gudHMiXSwibmFtZXMiOlsicmVmcmVzaCIsIm1vY2tpbmciLCJ1bmRlZmluZWQiLCJ1cmwiLCJjdHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFRTyxlQUFlQSxPQUFmLENBQXVCQyxPQUFtQixHQUFHLE1BQU1DLFNBQW5ELEVBQThEO0FBQ25FLFFBQU1DLEdBQUcsR0FBRyw4QkFBWjtBQUNBLFFBQU1DLEdBQUcsR0FBRyw4QkFBWjtBQUNBLFFBQU0sa0NBQWdCQSxHQUFoQixDQUFOO0FBQ0EsUUFBTSwrQkFBYUEsR0FBYixDQUFOO0FBQ0EsUUFBTUgsT0FBTyxFQUFiO0FBQ0EsUUFBTSx3QkFBTUUsR0FBTixDQUFOO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBzZXR1cENvbnRleHQsXG4gIHRlYXJkb3duQ29udGV4dCxcbiAgZ2V0Q29udGV4dCxcbiAgY3VycmVudFVSTCxcbiAgdmlzaXQsXG59IGZyb20gJ0BlbWJlci90ZXN0LWhlbHBlcnMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaChtb2NraW5nOiAoKSA9PiB2b2lkID0gKCkgPT4gdW5kZWZpbmVkKSB7XG4gIGNvbnN0IHVybCA9IGN1cnJlbnRVUkwoKTtcbiAgY29uc3QgY3R4ID0gZ2V0Q29udGV4dCgpO1xuICBhd2FpdCB0ZWFyZG93bkNvbnRleHQoY3R4KTtcbiAgYXdhaXQgc2V0dXBDb250ZXh0KGN0eCk7XG4gIGF3YWl0IG1vY2tpbmcoKTtcbiAgYXdhaXQgdmlzaXQodXJsKTtcbn1cbiJdfQ==