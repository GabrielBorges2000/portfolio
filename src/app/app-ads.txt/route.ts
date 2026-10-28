/** app-ads.txt do AdMob — o Google raspa essa URL para validar o
 *  publisher ID das unidades de anúncio do CodeBlock (anti-spoofing). */
const APP_ADS_TXT = [
    'google.com, pub-3323636009394692, DIRECT, f08c47fec0942fa0',
].join('\n');

export async function GET(): Promise<Response> {
    return new Response(APP_ADS_TXT, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}