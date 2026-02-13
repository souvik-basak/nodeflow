const Page = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This is a placeholder privacy policy for NodeFlow. Update this page
          with your data collection, usage, and retention details.
        </p>
      </div>
      <div className="space-y-6 text-sm text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">
            Data we collect
          </h2>
          <p className="mt-2">
            Account information, usage metrics, and optional integrations
            metadata.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">
            How we use data
          </h2>
          <p className="mt-2">
            To provide the service, improve workflows, and secure your account.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">
            Your choices
          </h2>
          <p className="mt-2">
            You can request deletion or export of your data at any time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
