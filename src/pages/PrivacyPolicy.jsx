import LegalLayout from './LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="26 August 2026">
      <div>
        <h2>Introduction</h2>
        <p>
          SE7 Studios ("SE7 Studios", "we", "us", or "our") respects your privacy. This Privacy
          Policy explains what information we handle when you visit se7.studio (the "Site") or
          contact us, and how we use it.
        </p>
      </div>

      <div>
        <h2>Information We Collect</h2>
        <p>
          The Site does not use a contact form, cookies, analytics, or any third-party tracking
          scripts. We do not automatically collect personal information from visitors browsing
          the Site.
        </p>
        <p className="mt-3">
          If you choose to email us (for example, via the "Start a project" or "Inquiries" links),
          we receive whatever information you voluntarily include in that email — typically your
          name, email address, and details about your project.
        </p>
      </div>

      <div>
        <h2>How We Use Information</h2>
        <p>
          We use the information you send us solely to respond to your enquiry, discuss potential
          projects, and, where a working relationship is established, to deliver our services. We
          do not sell, rent, or trade your personal information to third parties.
        </p>
      </div>

      <div>
        <h2>Cookies &amp; Tracking</h2>
        <p>
          The Site does not currently set cookies or use analytics or advertising trackers. If
          this changes in the future, this policy will be updated to describe what is used and
          why.
        </p>
      </div>

      <div>
        <h2>Data Retention &amp; Security</h2>
        <p>
          We retain email correspondence only for as long as necessary to respond to your enquiry
          and for legitimate business record-keeping. We take reasonable steps to protect
          information in our care, though no method of storage or transmission is completely
          secure.
        </p>
      </div>

      <div>
        <h2>Your Rights</h2>
        <p>
          You may ask us to access, correct, or delete personal information you have previously
          sent us by emailing{' '}
          <a href="mailto:se7studios.contact@gmail.com">se7studios.contact@gmail.com</a>.
        </p>
      </div>

      <div>
        <h2>Third-Party Links</h2>
        <p>
          The Site may link to third-party sites (for example, our social media profiles). We are
          not responsible for the privacy practices of those external sites.
        </p>
      </div>

      <div>
        <h2>Children's Privacy</h2>
        <p>The Site is not directed at children, and we do not knowingly collect information from children.</p>
      </div>

      <div>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated "Last updated" date.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>
          Questions about this policy can be sent to{' '}
          <a href="mailto:se7studios.contact@gmail.com">se7studios.contact@gmail.com</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
