const Page = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This is a placeholder terms page for NodeFlow. Replace this text with
          your official terms and conditions.
        </p>
      </div>
      <div className="space-y-6 text-sm text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">Usage</h2>
          <p className="mt-2">
            Use the service responsibly and comply with applicable laws.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Accounts</h2>
          <p className="mt-2">
            You are responsible for safeguarding your login credentials.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">
            Termination
          </h2>
          <p className="mt-2">
            We may suspend accounts that violate these terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
