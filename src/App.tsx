import { BrowserRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import AppRoutes from "./Routes";
import NavBar from "./components/navbar";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
Sentry.init({
  dsn: "https://20a075abedf64287a213a818dd3a0995@o1149387.ingest.sentry.io/6221495",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
function App() {
  return (
    // <BrowserRouter basename="patient">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  );
}

export default App;
