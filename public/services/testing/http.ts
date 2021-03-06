import { http } from "@fider/services";

export const httpMock = {
  alwaysOk: () => {
    const fn = jest.fn(() => {
      return Promise.resolve({
        ok: true
      });
    });
    http.get = fn;
    http.post = fn;
    http.put = fn;
    http.delete = fn;
    return http;
  }
};
