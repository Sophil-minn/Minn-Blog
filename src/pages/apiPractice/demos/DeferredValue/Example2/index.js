import { useState, useDeferredValue, Suspense, lazy } from "react";

const WithoutUseDeferredValue = lazy(() => import("./WithoutUseDeferredValue"));
const WithUseDeferredValue = lazy(() => import("./WithUseDeferredValue"));

export default function Index() {
  return (
    <>
      <Suspense fallback="使用useDeferredValue渲染">
        <WithUseDeferredValue />
      </Suspense>
      <Suspense fallback="使用useDeferredValue渲染">
        <WithoutUseDeferredValue />
      </Suspense>
    </>
  );
}
